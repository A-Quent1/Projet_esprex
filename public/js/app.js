/*if (location.pathname == "/users") {
    fetch("/api/users").then(res => res.json())
    .then(({ utilisateurs }) => {
        document.querySelector(".users").innerHTML=`
        <table>
            <tr>
                <th>Prenom</th>
                <th>Nom</th>
                <th>Email</th>
            </tr>
            <tr>
                ${users.map(({prenom, nom, email, color}) => `
                    <tr>
                    <th>${prenom}</th>
                    <th>${nom}</th>
                    <th>${email}</th>
                    </tr>
                `).join("")}
            </tr>
        </table>
        `
    });
};*/