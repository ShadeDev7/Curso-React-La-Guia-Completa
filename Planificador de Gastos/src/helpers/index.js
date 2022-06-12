export const formatCurrency = quantity => {
    return quantity.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};

export const trimAll = str => {
    return str.trim().replace(/\s{2,}/g, " ");
};

export const generateId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const getCurrentDate = () => {
    return new Date(Date.now()).toLocaleString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
};

export const firstCharToUppercase = str => str.charAt(0).toUpperCase() + str.slice(1);
