import { getData, initializeDatabase, setData, clearData, closeDatabase, openDatabase } from './databaseMock';
require("regenerator-runtime/runtime");

beforeAll(() => {
    initializeDatabase();
    openDatabase();
});

afterAll(() => {
    clearData();
    closeDatabase();
});

test('Write message to database', async () => {
    const message = 'This is the message';
    await setData(message);
});

test('Get test message from database', async () => {
    const data = await getData();
    expect(data).toBe('This is the message');
});