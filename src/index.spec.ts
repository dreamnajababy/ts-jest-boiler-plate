describe('hello world', () => {
    test('function can return hello world', () => {
        const fn = () => "hello world"
        expect(fn()).toBe("hello world")
    })
})