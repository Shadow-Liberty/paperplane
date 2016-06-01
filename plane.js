(function() {

   "use strict";

   var Plane;

   // Game Manager

   Plane = function( oApp ) {

       var game = this,
       score = 0;

       this.app = oApp;

       this.time = {
           "start": null,
           "current": null
       };

       // Background
        this.background = {
            "frame": {
                "sx": 205,
                "sy": 8,
                "sw": 192,
                "sh": 128,
                "dx": 0,
                "dy": 0,
                "dw": game.app.width,
                "dh": game.app.height
            },
            "draw": function() {
                game._drawSpriteFromFrame( this.frame );
            }
        };

        // Wall
        this.wall = {
            "frame": {
                "sx": 10,
                "sy": 8,
                "sw": 192,
                "sh": 256,
                "dx": 0,
                "dy": 0,
                "dw": 500,
                "dh": 667
            },
            "speed": 5,
            "maxOffset": 667 - game.app.height,
            "draw": function() {
                game._drawSpriteFromFrame( this.frame );
            },
            "update": function() {
                if ( this.frame.dy <= ( this.maxOffset * -1 ) ) {
                    this.frame.dy = 0;
                }
                this.frame.dy -= this.speed;
                this.draw();
            }
        };

        // Plane
        this.paperPlane = {
            "frames": [
                {
                    "sx": 171,
                    "sy": 270,
                    "sw": 15,
                    "sh": 16
                },
                {
                    "sx": 151,
                    "sy": 266,
                    "sw": 15,
                    "sh": 18
                },
                {
                    "sx": 130,
                    "sy": 268,
                    "sw": 18,
                    "sh": 17
                },
                {
                    "sx": 103,
                    "sy": 271,
                    "sw": 22,
                    "sh": 14
                },
                {
                    "sx": 75,
                    "sy": 271,
                    "sw": 24,
                    "sh": 13
                },
                {
                    "sx": 190,
                    "sy": 266,
                    "sw": 15,
                    "sh": 18
                },
                {
                    "sx": 208,
                    "sy": 268,
                    "sw": 18,
                    "sh": 17
                },
                {
                    "sx": 231,
                    "sy": 271,
                    "sw": 22,
                    "sh": 14
                },
                {
                    "sx": 257,
                    "sy": 271,
                    "sw": 24,
                    "sh": 13
                }

            ],
            "init": function() {
                this.animation = {
                    "maxSteps": this.frames.length,
                    "step": 8
                };
                this.state = {
                    "speed": 1.5,
                };
                this.destinationFrame = {
                    "dx": 0,
                    "dy": 52,
                    "dw": 44,
                    "dh": 40,
                    "x": 96

                };
            },
            "update": function() {
                //Generate movements following keyup (not keydown)
                this.destinationFrame.dx += this.state.speed;
                    if ( keyJustUp == 37 ) {
                        if ( keyCount[0] == 1 ) {
                            this.state.speed = 1.4;
                            this.destinationFrame.dx += this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 2 ) {
                            this.state.speed = 1.3;
                            this.destinationFrame.dx += this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 3 ) {
                            this.state.speed = 1.2;
                            this.destinationFrame.dx += this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 4 ) {
                            this.state.speed = 0;
                            this.destinationFrame.dx += this.state.speed;
                        }
                        if ( keyCount[0] == 5 ) {
                            this.state.speed = 1.2;
                            this.destinationFrame.dx -= this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 6 ) {
                            this.state.speed = 1.3;
                            this.destinationFrame.dx -=this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 7 ) {
                            this.state.speed = 1.4;
                            this.destinationFrame.dx -= this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 8 ) {
                            this.state.speed = 1.5;
                            this.destinationFrame.dx -= this.state.speed;
                            this.state.speed = 0;
                        }
                    }
                    if ( keyJustUp == 39 ) {
                        if ( keyCount[0] == 8 ) {
                            this.state.speed = 1.5;
                            this.destinationFrame.dx -= this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 7 ) {
                            this.state.speed = 1.4;
                            this.destinationFrame.dx -= this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 6 ) {
                            this.state.speed = 1.3;
                            this.destinationFrame.dx -= this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 5 ) {
                            this.state.speed = 1.2;
                            this.destinationFrame.dx -= this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 4 ) {
                            this.state.speed = 0;
                            this.destinationFrame.dx += this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 3 ) {
                            this.state.speed = 1.2;
                            this.destinationFrame.dx +=this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 2 ) {
                            this.state.speed = 1.3;
                            this.destinationFrame.dx += this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] == 1 ) {
                            this.state.speed = 1.4;
                            this.destinationFrame.dx += this.state.speed;
                            this.state.speed = 0;
                        }
                        if ( keyCount[0] === 0 ) {
                            this.state.speed = 1.5;
                            this.destinationFrame.dx += this.state.speed;
                            this.state.speed = 0;
                        }
                    }


                if ( 37 in keyPress ) { // Player holding left
                    if ( this.animation.step == 8 ) {
                        this.animation.step = 7;
                        game.wall.speed = 6;
                        game.platformLeft.speed = 6;
                        game.platformRight.speed = 6;
                    }
                    if ( this.animation.step == 7 && keyCount[0] == 1 ) {
                        this.animation.step = 6;
                        game.wall.speed = 7;
                        game.platformLeft.speed = 7;
                        game.platformRight.speed = 7;
                    }
                    if ( this.animation.step == 6 && keyCount[0] == 2 ) {
                        this.animation.step = 5;
                        game.wall.speed = 8;
                        game.platformLeft.speed = 8;
                        game.platformRight.speed = 8;
                    }
                    if ( this.animation.step == 5 && keyCount[0] == 3 ) {
                        this.animation.step = 0;
                        game.wall.speed = 10;
                        game.platformLeft.speed = 10;
                        game.platformRight.speed = 10;
                    }
                    if ( this.animation.step === 0 && keyCount[0] == 4 ) {
                        this.animation.step = 1;
                        game.wall.speed = 8;
                        game.platformLeft.speed = 8;
                        game.platformRight.speed = 8;
                    }
                    if ( this.animation.step == 1 && keyCount[0] == 5 ) {
                        this.animation.step = 2;
                        game.wall.speed = 7;
                        game.platformLeft.speed = 7;
                        game.platformRight.speed = 7;
                    }
                    if ( this.animation.step == 2 && keyCount[0] == 6 ) {
                        this.animation.step = 3;
                        game.wall.speed = 6;
                        game.platformLeft.speed = 6;
                        game.platformRight.speed = 6;
                    }
                    if ( this.animation.step == 3 && keyCount[0] == 7 ) {
                        this.animation.step = 4;
                        game.wall.speed = 5;
                        game.platformLeft.speed = 5;
                        game.platformRight.speed = 5;
                    }

                }
                if ( 39 in keyPress ) { // Player holding right
                    if ( this.animation.step == 4 && keyCount[0] == 8 ) {
                        this.animation.step = 3;
                        game.wall.speed = 6;
                        game.platformLeft.speed = 6;
                        game.platformRight.speed = 6;
                    }
                    if ( this.animation.step == 3 && keyCount[0] == 7 ) {
                        this.animation.step = 2;
                        game.wall.speed = 7;
                        game.platformLeft.speed = 7;
                        game.platformRight.speed = 7;
                    }
                    if ( this.animation.step == 2 && keyCount[0] == 6 ) {
                        this.animation.step = 1;
                        game.wall.speed = 8;
                        game.platformLeft.speed = 8;
                        game.platformRight.speed = 8;
                    }
                    if ( this.animation.step == 1 && keyCount[0] == 5 ) {
                        this.animation.step = 0;
                        game.wall.speed = 10;
                        game.platformLeft.speed = 10;
                        game.platformRight.speed = 10;
                    }
                    if ( this.animation.step === 0 && keyCount[0] == 4 ) {
                        this.animation.step = 5;
                        game.wall.speed = 8;
                        game.platformLeft.speed = 8;
                        game.platformRight.speed = 8;
                    }
                    if ( this.animation.step === 5 && keyCount[0] == 3 ) {
                        this.animation.step = 6;
                        game.wall.speed = 7;
                        game.platformLeft.speed = 7;
                        game.platformRight.speed = 7;
                    }
                    if ( this.animation.step == 6 && keyCount[0] == 2 ) {
                        this.animation.step = 7;
                        game.wall.speed = 6;
                        game.platformLeft.speed = 6;
                        game.platformRight.speed = 6;
                    }
                    if ( this.animation.step == 7 && keyCount[0] === 1 ) {
                        this.animation.step = 8;
                        game.wall.speed = 5;
                        game.platformLeft.speed = 5;
                        game.platformRight.speed = 5;
                    }
                    if ( this.animation.step == 7 && keyCount[0] == 1 ) {
                        this.animation.step = 6;
                        game.wall.speed = 7;
                        game.platformLeft.speed = 7;
                        game.platformRight.speed = 7;
                    }
                    if ( this.animation.step == 6 && keyCount[0] == 2 ) {
                        this.animation.step = 5;
                        game.wall.speed = 8;
                        game.platformLeft.speed = 8;
                        game.platformRight.speed = 8;
                    }
                    if ( this.animation.step == 5 && keyCount[0] == 3 ) {
                        this.animation.step = 0;
                        game.wall.speed = 10;
                        game.platformLeft.speed = 10;
                        game.platformRight.speed = 10;
                    }
                    if ( this.animation.step === 0 && keyCount[0] == 4 ) {
                        this.animation.step = 1;
                        game.wall.speed = 8;
                        game.platformLeft.speed = 8;
                        game.platformRight.speed = 8;
                    }
                    if ( this.animation.step == 1 && keyCount[0] == 5 ) {
                        this.animation.step = 2;
                        game.wall.speed = 7;
                        game.platformLeft.speed = 7;
                        game.platformRight.speed = 7;
                    }
                    if ( this.animation.step == 2 && keyCount[0] == 6 ) {
                        this.animation.step = 3;
                        game.wall.speed = 6;
                        game.platformLeft.speed = 6;
                        game.platformRight.speed = 6;
                    }
                    if ( this.animation.step == 3 && keyCount[0] == 7 ) {
                        this.animation.step = 4;
                        game.wall.speed = 5;
                        game.platformLeft.speed = 5;
                        game.platformRight.speed = 5;
                    }
                }

                //Hitboxes

                if ( game.platformLeft.frame.dx + game.platformLeft.frame.dw/2 >= this.destinationFrame.dx && game.platformLeft.frame.dx <= this.destinationFrame.dx + game.platformLeft.frame.dw/2 && this.destinationFrame.dy >= game.platformLeft.frame.dy/2.5 && this.destinationFrame.dy <= game.platformLeft.frame.dy/2.5 + game.platformLeft.frame.dh/2.5 ) {
                    game.over();
                }

                if ( game.platformRight.frame.dx + game.platformRight.frame.dw/2 >= this.destinationFrame.dx && game.platformRight.frame.dx <= this.destinationFrame.dx + game.platformRight.frame.dw/2 && this.destinationFrame.dy >= game.platformRight.frame.dy/2.5 && this.destinationFrame.dy <= game.platformRight.frame.dy/2.5 + game.platformRight.frame.dh/2.5 ) {
                    game.over();
                }

                // update score

                if ( game.platformLeft.frame.dy < 60 && game.platformLeft.frame.dy > 50 ) {
                    score++;

                }
                if ( game.platformRight.frame.dy < 60 && game.platformRight.frame.dy > 50 ) {
                    score++;

                }

            },
            "draw": function( iStep ) {
                var oContext = game.app.context,
                    oFrom = this.frames[ iStep ],
                    oDest = this.destinationFrame;

                oContext.save();
                oContext.translate( oDest.dx, oDest.dy );
                oContext.drawImage(
                    game.spriteSheet,
                    oFrom.sx,
                    oFrom.sy,
                    oFrom.sw,
                    oFrom.sh,
                    oDest.dx,
                    oDest.dy,
                    oDest.dw,
                    oDest.dh
                );
                oContext.restore();
            }
        };

        //Platforms

        this.platformLeft = {
            "frame": {
                "sx": 10,
                "sy": 299,
                "sw": 73,
                "sh": 12,
                "dx": 0,
                "dy": 666, // Beware of the devil!
                "dw": 260,
                "dh": 43
            },
            "speed": 5,
            "maxOffset": -43,
            "draw": function() {
                game._drawSpriteFromFrame( this.frame );
            },
            "update": function() {
                if ( this.frame.dy <= ( this.maxOffset ) ) {
                    this.frame.dy = 666;
                    this.frame.dx = Math.floor((Math.random() * -100 ) + 1);
                }
                this.frame.dy -= this.speed;
                this.draw();
            }
        };

        this.platformRight = {
            "frame": {
                "sx": 129,
                "sy": 299,
                "sw": 73,
                "sh": 12,
                "dx": 290,
                "dy": 999,
                "dw": 260,
                "dh": 43
            },
            "speed": 5,
            "maxOffset": -43,
            "draw": function() {
                game._drawSpriteFromFrame( this.frame );
            },
            "update": function() {
                if ( this.frame.dy <= ( this.maxOffset ) ) {
                    this.frame.dy = 666;
                    this.frame.dx = Math.floor((Math.random() * 100 ) + 240);
                }
                this.frame.dy -= this.speed;
                this.draw();
            }
        };

        //Game Over Screen

        this.gameOverScreen = {
            "frames": {
                "gameOver": {
                    "sx": 10,
                    "sy": 369,
                    "sw": 165,
                    "sh": 16,
                    "dx": 168,
                    "dy": 60,
                    "dw": 165,
                    "dh": 16
                },
                "score": {
                    "sx": 10,
                    "sy": 394,
                    "sw": 169,
                    "sh": 7,
                    "dx": 168,
                    "dy": 165,
                    "dw": 169,
                    "dh": 7
                }
            },
            "draw": function() {
                game._drawSpriteFromFrame( this.frames.gameOver );
                game._drawSpriteFromFrame( this.frames.score );
                oContext.font = "30px Lucida Console, Monaco, monospace";
                oContext.fillStyle = "white";
                oContext.fillText(score,canvas.width/2 - 5,210);
                oContext.fillText("Click to restart!",canvas.width/2 - 150,280);
            }
        };

        // Utils
        this._drawSpriteFromFrame = function( oFrame ) {
            this.app.context.drawImage(
                this.spriteSheet,
                oFrame.sx,
                oFrame.sy,
                oFrame.sw,
                oFrame.sh,
                oFrame.dx,
                oFrame.dy,
                oFrame.dw,
                oFrame.dh
            );
        };

        // Setup Game Over
        this.over = function() {
            window.cancelAnimationFrame( this.animationRequestID );
            this.gameOverScreen.draw();
            game.ended = true;
        };

        // Setup Animation loop
        this.animate = function() {
            this.time.current = Date.now();
            this.animationRequestID = window.requestAnimationFrame( this.animate.bind( this ) );

            // draw: clear
            this.app.context.clearRect( 0, 0, this.app.width, this.app.height );
            // draw: background
            this.background.draw();

            // draw & animate: wall
            this.wall.update();
            // draw & animate: plane
            this.paperPlane.update();

            this.paperPlane.draw( this.paperPlane.animation.step );

            // draw & animate: platforms
            this.platformLeft.update();
            this.platformRight.update();
            //setup restart
            if (game.ended === true) {
                canvas.addEventListener('click', function() {
                window.location.reload();
                });
            }
        };

        //Define ueseful variables & input functions

        var canvas = document.getElementById('game'),
        oContext = canvas.getContext('2d'),
        i,
        j=0,
        keyCount = [],
        keyPress = {},
        keyJustUp;

        addEventListener("keydown", function (e) {
               keyPress[e.which] = true;
        }, true);
        addEventListener("keyup", function (e) {
              delete keyPress[e.which];
              keyJustUp = e.which;
              if (e.which == 37 && keyCount<8) {
                for (i = 0; i < 1; i++) {
                    j = j+1;
                    keyCount[0]=j;
                }
            }
            if (e.which == 39 && keyCount>0) {
                for (i = 0; i < 1; i++) {
                    j = j-1;
                    keyCount[0]=j;
                }
            }

        }, true);

        // Init game
        this.init = function() {
            // reset some variables
            this.paperPlane.init(); // resetting variables for bird
            this.time.start = Date.now();
            // launch animation
            this.animate();
        };

        // Load spritesheet
        this.spriteSheet = new Image();
        this.spriteSheet.addEventListener( "load", this.init.bind( this ) );
        this.spriteSheet.src = "./resources/sprite.png";
    };

    window.Plane = Plane;

} ) () ;
