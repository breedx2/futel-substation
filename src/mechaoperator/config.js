var config = {
    //channels: ["#cor", "#pdxbots", "#futel"],
    channels: ["#xjwpo"],
    //noisyChannels: ['#cor', '#pdxbots', "#futel"],
    noisyChannels: ["#xjwpo"],
    server: "irc.freenode.net",
    botName: "mechaoperator",
    userName: "mechaoperator",
    realName: "Futel Mechanical Operator",
    dbFileName: '/opt/futel/var/spool/stats/prod/metrics.db',
    eventHostname: 'futel-prod.phu73l.net'
};

module.exports = { config: config };
