var methods = {};
// var projects = require('../project_data.json');

methods.getTickets = (req, res) => {
    try {
        res.json({
            status: 200,
            data: "ok"
        });
    } catch (err) {
        console.log(err, '.....');
        throw new Error('Uh oh!');
    }

};

methods.createTicket = (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    console.log(id, name);
    
    try{
        res.json({
            status: 200,
            data: 'ok'
        });
    }catch(err){
        console.log(err);
    }

};

module.exports = methods;