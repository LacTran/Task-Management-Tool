import randomid from 'randomid';
export const TasksData = [
    {
        id: randomid(4),
        name: "Soáº¡n ReactJS",
        labelArr: ["Frontend", "Backend"],
        priority: 1, // cao
        memberIDArr: ["user_1","user_3"],
        status: 1, //chưa bắt đầu
        description: "Pháº£i soáº¡n ReactJS kĂ¨m vá»›i NodeJS vĂ  Redux"
    },
    {
        id: randomid(4),
        name: "Dáº¡y AngularJS",
        labelArr: ["Frontend", "API"],
        priority: 2, //trung bình
        memberIDArr: ["user_2","user_3"],
        status: 2, //đang tiến hành
        description: "Ná»™i dung cá»§a Angular ráº¥t dĂ i vĂ  khĂ³"
    },
    {
        id: randomid(4),
        name: "Soáº¡n Python",
        labelArr: ["Backend"],
        priority: 2, 
        memberIDArr: ["user_2", "user_1"],
        status: 3, //hoàn thành
        description: "Soáº¡n python pháº£i táº­p trung vĂ o game vĂ  giáº£i quyáº¿t váº¥n Ä‘á»"
    },
    {
        id: randomid(4),
        name: "Thi Hackathon",
        labelArr: ["Frontend", "Backend", "Issue"],
        priority: 3, //thấp/
        memberIDArr: ["user_1", "user_2", "user_3"],
        status: 4, //hủy bỏ
        description: "Cuá»™c thi Ä‘Ă²i há»i tÆ° duy vĂ  ká»¹ nÄƒng coding"
    },
]
