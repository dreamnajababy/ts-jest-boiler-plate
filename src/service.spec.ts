describe('EventLog', () => {
    test('event log service can listen data on kafka', () => {
        const service = new EventLogService(); 
        service.on('test-topic')
    })
})