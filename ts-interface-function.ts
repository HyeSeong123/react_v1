interface ISmartphone {
    maker: string;
    name: string;
    battery: number;
    created_at : Date;
    features: String[];   
}

let iPhoneX: ISmartphone = {
    maker: "Apple",
    name: "iPhone X",
    battery: 65,
    created_at: new Date(20240924),
    features: ['스피커', '카메라', 'FaceId']
}

console.log(iPhoneX);