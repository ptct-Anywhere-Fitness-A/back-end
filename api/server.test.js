const server = require('./server')
const db = require('../data/dbConfig')
const supertest = require('supertest')

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async ()=>{
    await db('users').truncate()
})
afterAll(async ()=>{
    await db.destroy()
})
it('correct env var', ()=>{
    expect(process.env.NODE_ENV).toBe("testing")
})
test('sanity', () => {
    expect(true).toBe(true)
  })

describe('GET/', ()=>{
    it('returns a welcome message', async ()=> {
        const res = await supertest(server).get('/')
        .then((res) => {
            expect(res.status).toBe(200)
            expect(res.body.message).toBe("Welcome to the ptct-Anywhere-Fitness API")
        })
    })
})