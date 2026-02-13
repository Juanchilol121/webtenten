const navLinks = [
    {
        id: "cocktails",
        title: "Carta",
    },
    {
        id: "about",
        title: "Nosotros",
    },
    {
        id: "art",
        title: "Galería",
    },
    {
        id: "booking",
        title: "Reserva",
    },
    {
        id: "contact",
        title: "Contacto",
    },
];

const cocktailLists = [
    {
        name: "Ten Ten Sunset",
        country: "ES",
        detail: "Copa",
        price: "12€",
    },
    {
        name: "Benalmádena Breeze",
        country: "ES",
        detail: "Copa",
        price: "11€",
    },
    {
        name: "Mediterranean Mule",
        country: "ES",
        detail: "Copa",
        price: "10€",
    },
    {
        name: "Costa del Sol",
        country: "ES",
        detail: "Jarra",
        price: "25€",
    },
];

const mockTailLists = [
    {
        name: "Patatas Bravas 'Ten Ten'",
        country: "ES",
        detail: "Tapa",
        price: "8€",
    },
    {
        name: "Croquetas de Jamón Ibérico",
        country: "ES",
        detail: "Tapa",
        price: "9€",
    },
    {
        name: "Ensaladilla Rusa con Atún",
        country: "ES",
        detail: "Tapa",
        price: "7€",
    },
    {
        name: "Gambas al Pil Pil",
        country: "ES",
        detail: "Tapa",
        price: "12€",
    },
];

const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [
    "Vistas al Mar",
    "Terraza Chill-Out",
    "Música en Vivo",
    "Ambiente Familiar",
];

const goodLists = [
    "Ingredientes de Proximidad",
    "Recetas de Autor",
    "Servicio Personalizado",
    "Sabores Mediterráneos",
];

const storeInfo = {
    heading: "Encuéntranos en",
    address: "Paseo Marítimo de Benalmádena (frente al mar)",
    contact: {
        phone: "123 45 67 89",
        email: "info@tentenlounge.com",
    },
};

const openingHours = [
    { day: "Lun–Jue", time: "12:00pm – 12am" },
    { day: "Vier", time: "12:00pm – 2am" },
    { day: "Sab", time: "11:00am – 2am" },
    { day: "Dom", time: "11:00am – 1am" },
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const allCocktails = [
    {
        id: 1,
        name: "Ten Ten Sunset",
        image: "/images/drink1.png",
        title: "El Sabor del Atardecer en tu Copa",
        description:
            "Nuestro cóctel estrella. Una mezcla secreta de licores premium con toques de naranja y granada que te transportará a una puesta de sol en Benalmádena.",
    },
    {
        id: 2,
        name: "Benalmádena Breeze",
        image: "/images/drink2.png",
        title: "La Brisa del Mar Hecha Cóctel",
        description:
            "Una combinación refrescante de ginebra, pepino, menta y un toque de lima. Ideal para los días más calurosos en nuestra terraza frente al mar.",
    },
    {
        id: 3,
        name: "Mediterranean Mule",
        image: "/images/drink3.png",
        title: "Un Clásico con Toque Mediterráneo",
        description:
            "Nuestra versión del clásico Moscow Mule, con un toque de romero y jengibre fresco que le da un sabor único y aromático. ",
    },
    {
        id: 4,
        name: "Costa del Sol",
        image: "/images/drink4.png",
        title: "El Sabor de la Costa en una Jarra",
        description:
            "Una deliciosa sangría de vino blanco con frutas de temporada y un toque espumoso. Perfecta para compartir con amigos mientras disfrutas de las vistas.",
    },
];

export {
    navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allCocktails,
};