exports.homePage = (req, res) => {
    res.sendFile(resolve("../views/pages/home"));
};

exports.servicesPage = (req, res) => {
    res.sendFile(resolve("../views/pages/services"))
};

exports.usersPage = (req, res) => {
    res.sendFile(resolve("../views/pages/users"))
    user: "Moi"
};

exports.contactPage = (req, res) => {
    res.sendFile(resolve("../views/pages/contact"));
};