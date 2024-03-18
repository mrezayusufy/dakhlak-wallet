export const Slides : ISlide[] = [
    {
        id:"1",
        title1:'Fastest Growing Crypto App',
        subtitle:'Running your Crypto Wallet is easier with Binnity',
        bg:require('@/assets/image/2.png'),
       
    },
    {
        id:"2",
        title1:'Secure Reliabe Wallet App',
        subtitle:'Running your Crypto Wallet is easier with Binnity',
        bg:require('@/assets/image/3.png'),
        
    },{
        id:"3",
        title1:'Manage Payments And Cashouts',
        subtitle:'Running your Crypto Wallet is easier with Binnity',
        bg:require('@/assets/image/4.png'),
       
    },
];

export interface ISlide {
    id: string;
    title1: string;
    subtitle: string;
    bg: any;
}