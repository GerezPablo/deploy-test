const {Router} = require('express');
const {check} = require('express-validator');
const {validateFields} = require('../middlewares/validateFields');
const {validateToken} = require('../middlewares/validateToken');
const {userRegister, userLogin, tokenRenew} = require('../controllers/auth');

const  router = Router();

//Root
router.get('/', (req, res) => { res.json({isOn:true}) });


//Register 
router.post('/register', 
    [   //Middlewares
        check('uname', 'Username cannot be empty.').not().isEmpty(),
        check('uname', 'Username too short.').isLength({min:6}),
        check('password', 'Password cannot be empty.').not().isEmpty(),
        check('password', 'Password must have 6 characters at least.').isLength({min:6}),
        check('email', 'Email cannot be empty.').not().isEmpty(),
        validateFields
    ], userRegister
);

//Login
router.post('/', 
    [   //Middlewares
        check('email', 'Email cannot be empty.').not().isEmpty(),
        check('email', 'Invalid email address.').isEmail(),
        check('password', 'Password cannot be empty.').not().isEmpty(),
        check('password', 'Password must have 6 characters at least.').isLength({min:6}),
        validateFields
    ], userLogin
);

//Token renew 
router.get('/renew', tokenRenew, validateToken);





module.exports = router;