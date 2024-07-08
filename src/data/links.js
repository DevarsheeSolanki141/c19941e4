var apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

module.exports = {
    client: {},
    server:{
        getAllActivities:'activities',
        getActivitiesByCallId:'activities/<call_id>',
        updateActivity:'activities/<call_id>',
        resetAllActivities:'reset'

    }
}