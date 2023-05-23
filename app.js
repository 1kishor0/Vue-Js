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
        

        user2:{
            names:"John",
            Ages:"24",
            Dur:"3 months ago",
        },
        name:"John",
        named:"boy"

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

    getcoord(event){

        this.p=event.clientX;
        this.q=event.clientY;
    },
    
    
    


}
});