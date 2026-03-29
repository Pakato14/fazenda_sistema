require('dotenv').config()

function checkPerfil(rolesPermitidos){
    return (req, res, next) => {
        const profile = res.locals.user._profile_id;
        if(!rolesPermitidos.includes(profile)){
            return res.status(403).json({message: "Acesso negado!"});
        }
        next();
    }
}

module.exports = {checkPerfil : checkPerfil}