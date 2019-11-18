var deviceModel = require('./../schemes/devices_scheme');

exports.getAllDevices = (req, res) => {
    deviceModel.find({}, (err, result) => {
        if(err) res.status(500).send({ error: err })
        res.json({ 'message': 'Get All Devices', 'devices': result })
    })
}

exports.getDevice = (req, res) => {
    let deviceId = req.params.id;
    res.json({ 'message': `Get unique device ${deviceId}` })
}

exports.createDevice = async (req, res) => {
    let deviceData = req.body;
    let response  = await deviceModel.create(deviceData)
    res.json({ 'message': 'Create device', 'device': response })
}

exports.updateDevice = (req, res) => {
    let deviceData = req.body;
    let deviceId = req.params.id;
    res.json({ 'message': 'Update device', 
                'device': deviceData,
                'deviceId': deviceId
     })
}

exports.deteleDevice = (req, res) => {
    let deviceId = req.params.id;
    deviceModel.deleteOne({ _id: deviceId }, function (err) {
      if(err) res.status(500).send({error: err})
        res.json({ 'message': `Detele device ${deviceId}` })      
    });
    
}

