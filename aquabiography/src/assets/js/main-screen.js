var params = {
    webGLCanvasID: "canvas",
    planeElementID: "fullwidth-image",
    
    pointerSize: 0.25,
 
    opacitySpeed: 0.0125,
   
    velocityStrength: 0.25,

    displacementStrength: 0.25,

    canvasScale: 0.125, 
  };
  
  function MouseEffect(params) {
 
      this.init(params);
  
      return this;
  }

  MouseEffect.prototype.init = function(params) {
  
      this.curtains = new Curtains({
        container: params.webGLCanvasID
      });
  
      this.plane = null;
  

      this.planeElement = document.getElementById(params.planeElementID);
  
      this.pixelRatio = this.curtains.pixelRatio || 1;
  

      this.mouse = {
          position: {
              x: 0,
              y: 0,
          },
          attributes: [],
      };
  
    
      this.params = {
          pointerSize: params.pointerSize || 0.25,
          opacitySpeed: params.opacitySpeed || 0.0125,
  
          velocityStrength: params.velocityStrength || 0.25,
          displacementStrength: params.displacementStrength || 0.25,
  
          canvasScale: params.canvasScale || 0.125,
      };
  
      this.canvas = null;
      this.canvasContext = null;
  
      if(
          !document.getElementById(params.webGLCanvasID) ||
          !document.getElementById(params.planeElementID)
      ) {
          console.warn("You must specify a valid ID for the WebGL canvas and the plane element");
          return false;
      }
  
  }
  

  MouseEffect.prototype.resize = function() {
  
      if(this.canvas && this.canvasContext) {
          this.canvas.width = this.planeElement.clientWidth * this.pixelRatio * this.params.canvasScale;
          this.canvas.height = this.planeElement.clientHeight * this.pixelRatio * this.params.canvasScale;
  
          this.canvasContext.width = this.planeElement.clientWidth * this.pixelRatio * this.params.canvasScale;
          this.canvasContext.height = this.planeElement.clientHeight * this.pixelRatio * this.params.canvasScale;
  
          this.canvasContext.scale(this.pixelRatio * 1 / this.params.canvasScale, this.pixelRatio * 1 / this.params.canvasScale);
 
      }
  
  }
  

  MouseEffect.prototype.handleMovement = function(e) {
  
      this.mouse.position.x = e.clientX;
      this.mouse.position.y = e.clientY;
  

      if(e.targetTouches) {
  
          this.mouse.position.x = e.targetTouches[0].clientX;
          this.mouse.position.y = e.targetTouches[0].clientY;
      }
  

      if(this.planeElement && this.plane) {
          var mouseAttributes = {
              x: this.mouse.position.x * Math.pow(this.params.canvasScale, 2),
              y: this.mouse.position.y * Math.pow(this.params.canvasScale, 2),
  
              scale: 0.05,
              opacity: 1,
              velocity: {
                  x: 0,
                  y: 0,
              },
          }
  
    
          mouseAttributes.initialPosition = {
              x: mouseAttributes.x,
              y: mouseAttributes.y
          }
  

          if(this.mouse.attributes.length > 0) {
              mouseAttributes.velocity = {
                  x: Math.max(-this.params.canvasScale * 1.25, Math.min(this.params.canvasScale * 1.25, mouseAttributes.initialPosition.x - this.mouse.attributes[this.mouse.attributes.length - 1].initialPosition.x)),
                  y: Math.max(-this.params.canvasScale * 1.25, Math.min(this.params.canvasScale * 1.25, mouseAttributes.initialPosition.y - this.mouse.attributes[this.mouse.attributes.length - 1].initialPosition.y)),
              };
          }
        
   
          if(this.mouse.attributes.length == 0) {
              this.curtains.enableDrawing();
          }
 
          this.mouse.attributes.push(mouseAttributes);
  
    
          var mouseCoords = this.plane.mouseToPlaneCoords(this.mouse.position.x, this.mouse.position.y);

          this.plane.uniforms.mousePosition.value = [mouseCoords.x, mouseCoords.y];
      }
  
  }
  
  

  MouseEffect.prototype.drawGradientCircle = function(pointerSize, circleAttributes) {
      this.canvasContext.beginPath();
  
      var gradient = this.canvasContext.createRadialGradient(
          circleAttributes.x, circleAttributes.y, 0,
          circleAttributes.x, circleAttributes.y, pointerSize * circleAttributes.scale * this.params.canvasScale
      );
  
      gradient.addColorStop(0, 'rgba(255, 255, 255, ' + circleAttributes.opacity + ')');
  
   
  
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
      this.canvasContext.fillStyle = gradient;
  
      this.canvasContext.arc(
          circleAttributes.x, circleAttributes.y, pointerSize * circleAttributes.scale * this.params.canvasScale,
          0, 2 * Math.PI, false
      );
      this.canvasContext.fill();
      this.canvasContext.closePath();
  }
  
  
 
  MouseEffect.prototype.animateCanvas = function() {

      var pointerSize = window.innerWidth > window.innerHeight ?
          Math.floor(this.canvas.height * this.params.pointerSize) :
          Math.floor(this.canvas.width * this.params.pointerSize);
  
  
      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  

      this.canvasContext.beginPath();
      this.canvasContext.fillStyle = "black";
  
      this.canvasContext.rect(0, 0, this.canvas.width, this.canvas.height);
      this.canvasContext.fill();
      this.canvasContext.closePath();
  
      for(var i = 0; i < this.mouse.attributes.length; i++) {
          this.drawGradientCircle(pointerSize, this.mouse.attributes[i]);
      }
  }
  
  
  MouseEffect.prototype.handlePlane = function() {
  
      var self = this;
  
      self.plane.onReady(function() {
  
          window.addEventListener("resize", self.resize.bind(self), false);
  
          document.body.addEventListener("mousemove", self.handleMovement.bind(self), false);
          document.body.addEventListener("touchmove", self.handleMovement.bind(self), {
              passive: true
          });
        

          self.curtains.disableDrawing();
        
          self.curtains.needRender();
  
      }).onRender(function() {
  
          for(var i = 0; i < self.mouse.attributes.length; i++) {
     
              self.mouse.attributes[i].opacity -= self.params.opacitySpeed;
  
         
              self.mouse.attributes[i].x += self.mouse.attributes[i].velocity.x * self.params.velocityStrength;
              self.mouse.attributes[i].y += self.mouse.attributes[i].velocity.y * self.params.velocityStrength;
  
             
              if(self.mouse.attributes[i].opacity >= 0.5) {
                  self.mouse.attributes[i].scale += (self.params.opacitySpeed * 2);
              }
              else {
                  self.mouse.attributes[i].scale -= self.params.opacitySpeed;
              }
  
              if(self.mouse.attributes[i].opacity <= 0) {
              
                  self.mouse.attributes.splice(i, 1);
                
               
                  if(self.mouse.attributes.length == 0) {
                      self.curtains.disableDrawing();
                  }
              }
          }
  
          
          self.animateCanvas();
      });
  
  }

  MouseEffect.prototype.removePlane = function() {
      var self = this;
  
      
      window.removeEventListener("resize", self.resize);
      document.body.removeEventListener("mousemove", self.handleMovement);
      document.body.removeEventListener("touchmove", self.handleMovement);
  
    
      self.curtains.removePlane(self.plane);
  
      self.plane = null;
    
      self.canvas = null;
      self.canvasContext = null;
  }
  
  
 
  MouseEffect.prototype.addPlane = function() {
  
  
      this.planeParams = {
          vertexShaderID: "mouse-displacement-vs",
          fragmentShaderID: "mouse-displacement-fs",
          imageCover: true,
          uniforms: {
              mousePosition: {
                  name: "uMousePosition",
                  type: "2f",
                  value: [this.mouse.position.x, this.mouse.position.y],
              },
              mouseEffect: {
                  name: "uDisplacementStrength",
                  type: "1f",
                  value: this.params.displacementStrength,
              },
          },
      };
  
  
      this.plane = this.curtains.addPlane(this.planeElement, this.planeParams);
  
  
      if(this.plane) {
          this.canvas = document.createElement("canvas");
          this.canvas.setAttribute("data-sampler", "canvasTexture");
          this.canvasContext = this.canvas.getContext("2d", { alpha: false });
        
     
          this.plane.loadCanvases([this.canvas]);
  
     
          this.resize();
  
         
          this.handlePlane();
      }
  }
  
  
  window.onload = function() {
      var mouseEffect = new MouseEffect(params);
  
      mouseEffect.curtains.onError(function() {
          document.body.classList.add("no-webgl");
      });
  
      mouseEffect.addPlane();
  }