
        var frameNumber = 0, // start video at frame 0
            // lower numbers = faster playback
            playbackConst = 1600,
            setHeight = document.getElementById("set-height"),
            vid = document.getElementById('v0');
        vid.addEventListener('loadedmetadata', function () {
            setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
        });


         var frameNumberV1 = 0, 
           playbackConst1 = 1600,
           setHeightV1 = document.getElementById("set-heightV1"),
           vid1 = document.getElementById("v1");
           vid1.addEventListener("loadedmetadata", function () {
        //    setHeightV1.style.height =  Math.floor(vid1.duration) * playbackConst1 + "px";
         });




        // Use requestAnimationFrame for smooth playback
        function scrollPlay() {
            var frameNumber = (window.pageYOffset / playbackConst);
            vid.currentTime = frameNumber;

            var frameNumber1 = (window.pageYOffset-4000) / playbackConst1;
            vid1.currentTime = frameNumber1;


            window.requestAnimationFrame(scrollPlay);
            if (vid.currentTime >= vid.duration) {
                vid.style.display = "none";
            }
            else {
                vid.style.display = "block";
            }

            var redB = document.getElementById("rebBase");
            var max = document.getElementById("maximum");
            var element = document.getElementById("element");
            var v1 = document.getElementById("v1");
            var setHeight = document.getElementById("set-height");
            var workout = document.getElementById("workOuts");

            // const el = document.querySelector(".trainers");
            // console.log(el.scrollLeft, el.scrollTop);



            var rebBase = redB.offsetTop;

            console.log(rebBase);
            if(rebBase>1010){
               redB.classList.add("show");
                max.classList.add("show");
                 if (rebBase > 1500) {
                    max.classList.add("showNormal");
                }
                else{
                    max.classList.remove("showNormal");
                }
                if (rebBase > 1800) {
                    element.classList.add("height");
                }
                else{
                    element.classList.remove("height");
                }
            }
            else{
               redB.classList.remove("show");
                max.classList.remove("show");
            } 

             if (rebBase > 2500) {
               setHeight.classList.add("hidden");
             }
             else{
                  setHeight.classList.remove("hidden");
             }

            if(rebBase>3200){
                v1.classList.add("show");
                if(rebBase>3800){
                    workout.classList.add("show");
                }
                else{
                    workout.classList.remove("show");
                }
            }
            else{
                v1.classList.remove("show");
            }

            // if(rebBase>6900){
            //     v1.classList.remove("show");
            // }
        }
        window.requestAnimationFrame(scrollPlay);



        