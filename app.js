new Vue({

    el: '#app',
    data:{
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "This is a great viewing experience",
        title: "Sample",
        isItTrue: true,
        cars:['Ford', 'Toyota'],
        robot:{
            name: 'Bird',
            age: 20
        },
        greeting:()=>{
            return "Hello World";
        },

        myText: "This is a great viewing experience",
        myHtml: "<strong> A manual car </strong>",

        x: 20,
        y: 30,
        z:40,
        p:0,
        q:0,
        salary:10,
        s:0,
        r:0,
        n:0,
        z:0,
        

        user2:{
            names:"John",
            Ages:"24",
            Dur:"3 months ago",
        },
        name:"John",
        named:"boy",
        rename:"John",

        formData:{
            firstName:"",
            lastName:"",
        },
    },





    methods: {
         fullName :()=>{
            return "Sheikh Rahmatulla Sakib";
        },

        changedUsers:()=>{
            return (this.z > this.y)? true:false ;
    },
    update(){
        setTimeout(()=>{
                this.name="Rafee";
        },2000);
    
    },

    updateUser(){
        this.named="Rafee";
    },

    getcoord(event) {
        this.p = event.clientX;
        this.q = event.clientY;
        
        if (this.p === 0 && this.q === 0) {
          // Update values outside the hover div
          // For example:
          this.p = 10;
          this.q = 20;
        }
      },

      namechanger(newname,event){
        this.rename=newname;
        console.log(event);

      },
      handleform(){
        console.log(this.formData);

      },
  


},
computed:{
    addtoA(){
        console.log("ADD A");
        return this.n+this.salary;
      },
      addtoB(){
        console.log("ADD B");
        return this.z+this.salary;
      }
}
});

const app2=new Vue({
    el:"#app1",

    data:{
        value:100,
    },

    methods: {
        change(){
            app3.value="changed";
          return this.value;
        }
    },


});

const app3=new Vue({
    el:"#app2",

    data:{
        value:100,
    },


});