const express = require('express');
const router = express.Router();


router.get('/admin/login', (req, res, next) => {
    res.render('admin/login');
})

// route protégé par authorization par session
router.get('/admin/liste', (req, res, next) => {
    // La méthode isAuthenticated est fournie par passport,
    // elle aura une valeur de true si la session est active
    if (req.isAuthenticated()) {
        // Si l'utilisateur est authentifié, nous avons accès à l'objet req.user passé par les middlewares de passport antérieur
        console.log('in /admin/liste', req.user)
        return res.render('admin/liste')
    }
    // Si l'utilisateur n'est pas authentifié, on le redirige vers la page d'admin
    res.render('admin/login');
})

module.exports = router;