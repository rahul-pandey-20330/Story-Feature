  let arr = [
    {
        dp : "https://scontent.flko1-1.fna.fbcdn.net/v/t39.30808-6/480252792_598781763039980_4426390167140478881_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=nAZVbIddSMQQ7kNvgFKQ1Cz&_nc_oc=Adjogc3peuVSrs7z2egPCOJUwF7Ic8_7FUG96mLNWVUNUyDU3H4Ije_ptayG-vHdtjLINBhLODe6wnvt-QaByP3Z&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_gid=AajAzUPo5CCTF0OVpO56dEZ&oh=00_AYDBPPvnwj9YLr0f4kYZbtU-0IGFclB6sUmPsRaSyzGYXA&oe=67C06EFD",
        story : "https://scontent.flko1-1.fna.fbcdn.net/v/t39.30808-6/480252792_598781763039980_4426390167140478881_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=nAZVbIddSMQQ7kNvgFKQ1Cz&_nc_oc=Adjogc3peuVSrs7z2egPCOJUwF7Ic8_7FUG96mLNWVUNUyDU3H4Ije_ptayG-vHdtjLINBhLODe6wnvt-QaByP3Z&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_gid=AajAzUPo5CCTF0OVpO56dEZ&oh=00_AYDBPPvnwj9YLr0f4kYZbtU-0IGFclB6sUmPsRaSyzGYXA&oe=67C06EFD"
    },
    {
        dp : "https://scontent.flko1-1.fna.fbcdn.net/v/t39.30808-6/477847119_595907529994070_2755643355157972233_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=j8_obGs3KwkQ7kNvgHFpgdO&_nc_oc=AdjI0wshxqWDFb3wmbHfhk5e6AtZJJ0M7DmZubOMR_qhYGKkIDMUNu5yrsh4GlI8WYt8JgPZpj6i-OfeeQ_OPc5e&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_gid=AZ0Qs-H_MlDJTT53NRH-e20&oh=00_AYCUvVMHU8vg3482QwQXOn99D5-m3LqVTYuIl3fbs7F3dw&oe=67C04EF6",
        story : "https://scontent.flko1-1.fna.fbcdn.net/v/t39.30808-6/477847119_595907529994070_2755643355157972233_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=j8_obGs3KwkQ7kNvgHFpgdO&_nc_oc=AdjI0wshxqWDFb3wmbHfhk5e6AtZJJ0M7DmZubOMR_qhYGKkIDMUNu5yrsh4GlI8WYt8JgPZpj6i-OfeeQ_OPc5e&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_gid=AZ0Qs-H_MlDJTT53NRH-e20&oh=00_AYCUvVMHU8vg3482QwQXOn99D5-m3LqVTYuIl3fbs7F3dw&oe=67C04EF6"
    },
    {
        dp:"https://scontent.flko1-1.fna.fbcdn.net/v/t39.30808-6/448619917_999497921636155_240380002385924904_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mHPSexWxWSQQ7kNvgHO8Q1C&_nc_oc=AdiVjmNX8x12nKkV51okmkTHC-sFGOcTn_lSuXZUEmeJzymlBkxTnn5uow-W33whareaNwXuumtKDgj04G4ZMb4K&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_gid=Avcqd07HdCbE59S-hpH1sTh&oh=00_AYBwbkiivF6Ct36J4tv7fIOcUuOA4cUIgU_kko87EH8niA&oe=67C05EA0",
        story:"https://scontent.flko1-1.fna.fbcdn.net/v/t39.30808-6/448619917_999497921636155_240380002385924904_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mHPSexWxWSQQ7kNvgHO8Q1C&_nc_oc=AdiVjmNX8x12nKkV51okmkTHC-sFGOcTn_lSuXZUEmeJzymlBkxTnn5uow-W33whareaNwXuumtKDgj04G4ZMb4K&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_gid=Avcqd07HdCbE59S-hpH1sTh&oh=00_AYBwbkiivF6Ct36J4tv7fIOcUuOA4cUIgU_kko87EH8niA&oe=67C05EA0"
    },
    {
        dp:"https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/414457593_902915838080083_3797939456066621105_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=b_2h0zrYa10Q7kNvgGnqGLm&_nc_oc=Adi2W9fUleewl4sPyYo1uda9i51pWkljseK11LCQPMDLDe-bxMXDY6vA6qMszNbPH9-4FGNGHx5jq5n3H5RzawVJ&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_gid=AuNSZBNTbFkmT53F40er9aH&oh=00_AYCagCeY1Cq_cQPuBEBJAMUGhe-cvDFe6RRVH1rEKPfLwg&oe=67C06E66",
        story:"https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/414457593_902915838080083_3797939456066621105_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=b_2h0zrYa10Q7kNvgGnqGLm&_nc_oc=Adi2W9fUleewl4sPyYo1uda9i51pWkljseK11LCQPMDLDe-bxMXDY6vA6qMszNbPH9-4FGNGHx5jq5n3H5RzawVJ&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_gid=AuNSZBNTbFkmT53F40er9aH&oh=00_AYCagCeY1Cq_cQPuBEBJAMUGhe-cvDFe6RRVH1rEKPfLwg&oe=67C06E66"
    },
    {
        dp:"https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/445046219_474538218286500_2677753946547904338_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o7qcJgEyTjEQ7kNvgFAr2YM&_nc_oc=AdiBd7AlMjNzo4Sep2jpyxu1KW_9GyEchIVNz33Se7ZBThceTT84op87EacXzQ4c7OizpPVah8WkzRD0wnK8cCpQ&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_gid=AWXsmoORGTS7oPv1epT1wpJ&oh=00_AYBlKGfJjQRWwC79zRyercAa11g8Hi6YMGIAq20B5exvgw&oe=67C05EA5",
        story:"https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/445046219_474538218286500_2677753946547904338_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o7qcJgEyTjEQ7kNvgFAr2YM&_nc_oc=AdiBd7AlMjNzo4Sep2jpyxu1KW_9GyEchIVNz33Se7ZBThceTT84op87EacXzQ4c7OizpPVah8WkzRD0wnK8cCpQ&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_gid=AWXsmoORGTS7oPv1epT1wpJ&oh=00_AYBlKGfJjQRWwC79zRyercAa11g8Hi6YMGIAq20B5exvgw&oe=67C05EA5"
    },
    {
        dp:"https://scontent.flko1-1.fna.fbcdn.net/v/t39.30808-6/472753536_613868121020175_9019626554697594201_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=wMheherZZOcQ7kNvgFJd4dm&_nc_oc=Adgl0ikBR4qXomnkoax8JRRp0yGmw6Qxkt4MwKk7aborbSUXbYERJjy3wtrVqlNncmAUr-jsRkHv7RP8oE7dYVy3&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_gid=AIMQIuuUEnL1WH3WDvXmSrT&oh=00_AYAEbcrKb1cZZ94E8opqgf4yDuvT3OKJyh6gXCH2HoA6AA&oe=67C06A50",
        story:"https://scontent.flko1-1.fna.fbcdn.net/v/t39.30808-6/472753536_613868121020175_9019626554697594201_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=wMheherZZOcQ7kNvgFJd4dm&_nc_oc=Adgl0ikBR4qXomnkoax8JRRp0yGmw6Qxkt4MwKk7aborbSUXbYERJjy3wtrVqlNncmAUr-jsRkHv7RP8oE7dYVy3&_nc_zt=23&_nc_ht=scontent.flko1-1.fna&_nc_gid=AIMQIuuUEnL1WH3WDvXmSrT&oh=00_AYAEbcrKb1cZZ94E8opqgf4yDuvT3OKJyh6gXCH2HoA6AA&oe=67C06A50"
    },
    {
        dp:"https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/464617802_587096083769073_6794919398528487568_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-RH_xKgAO9MQ7kNvgE85kCj&_nc_oc=Adjpl0AP0lgkpKvUkEGYjyU0oVUM0Tqv6XUZqlVzotC0YO4rWhWwq0FUribmJePhUS3tx8uCgAgZLZmHERnSUhOB&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_gid=AKWjTE3JX-8J86JGTYhcS4E&oh=00_AYCMO5dtCESculeeQPbPDdvy1uRh_SBKM2ecurqx8Qfd8Q&oe=67C065BC",
        story:"https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/464617802_587096083769073_6794919398528487568_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-RH_xKgAO9MQ7kNvgE85kCj&_nc_oc=Adjpl0AP0lgkpKvUkEGYjyU0oVUM0Tqv6XUZqlVzotC0YO4rWhWwq0FUribmJePhUS3tx8uCgAgZLZmHERnSUhOB&_nc_zt=23&_nc_ht=scontent.flko1-2.fna&_nc_gid=AKWjTE3JX-8J86JGTYhcS4E&oh=00_AYCMO5dtCESculeeQPbPDdvy1uRh_SBKM2ecurqx8Qfd8Q&oe=67C065BC"
    }
  ]
  let clutter = ""
  let storyfeature = document.querySelector('.storyfeature');

  let screen = document.querySelector(".full-screen");

  arr.forEach(function(elem,idx){
        clutter += `<div class="story1">
            <img id = "${idx}"src="${elem.dp}"alt=image>
        </div>`
  })
  document.querySelector('.storyfeature').innerHTML = clutter;

  storyfeature.addEventListener("click",function(dets){
    screen.style.display = "block"
    screen.style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        screen.style.display = "none";
    },2000)
  })
  