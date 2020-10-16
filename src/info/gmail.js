module.exports = {
    name: "gmail",
    run: (client, message, args) => {
        function choose(choices) {
            var index = Math.floor(Math.random() * choices.length);
            return choices[index];
          }
          
          function dotit(email){
            var username = email.split("@")[0]
            var dotemail = ""
            for(i=0;i<username.length-1;i++){
              dotemail +=username[i]+choose(["", "."])
            }
            dotemail +=username[username.length-1]+"@gmail.com"
            return dotemail
          }
          
          const email = args[0]
          if (!args[0]) {
              message.channel.send("please include your email")
          } else {
            message.channel.send(dotit(`${email}@gmail.com`))
          }
          
    }
};