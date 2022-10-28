const server = require("../server");
// Assertion (Test Driven Development) and Should,  Expect(Behaviour driven 
// development) library
const chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
const { assert, expect } = chai;

describe("Server!", () => {
    // Sample test case given to test / endpoint.
    it("Returns HTTP code 200 for the default page", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Returns HTTP code 200 after a valid post request to /add_drink", (done) => {
        const drink_test = {name: "The Griffin", url: "https://tekpossible.com", img: "https://www.google.com/search?q=cursed+images&tbm=isch&source=iu&ictx=1&vet=1&fir=s1nKlTX0CGtFUM%252Cuubulabdq09Y4M%252C_%253BZFVX0XZCAO1EKM%252CBGe5vlktc3KWhM%252C_%253BN-r38xYzuf1u1M%252C6aor8J6m_v6jAM%252C_%253B4H0DMWEWP-C8uM%252Ca5q2ydmd1JDRXM%252C_%253Bn8SpfxAkmr29IM%252Cn53lMWLv70D2AM%252C_%253Bm0CdiPCgAaT2zM%252C0C37zl8fozrWxM%252C_%253Bt_h83sBK1X3fEM%252CBGe5vlktc3KWhM%252C_%253B9dtVMIqZkgO5cM%252CrOz2qbnzyvIoRM%252C_%253BZkJ_X0L6hjzc2M%252CJJjrMiFsfR6S2M%252C_%253BYSIQwtqKumEQCM%252CT7nNJtjA4Ny7gM%252C_%253Bb4VSKQELWCVlgM%252CI8n67VCq2EhQxM%252C_%253BjKTe5tv6RmXO3M%252C4WQr8ANicfu5DM%252C_%253BxjEoa341RlbXOM%252CZ6tFL8UrncJ7bM%252C_%253BeZ7wgl80ijZdHM%252C4lbKr-TwGeHU6M%252C_&usg=AI4_-kQe5X-v1H6KNnifoYGo3ezxNxIf-Q&sa=X&ved=2ahUKEwiN16_Y7bT3AhWYHjQIHRtgB44Q9QF6BAgDEAE#imgrc=s1nKlTX0CGtFUM", drink_id: "474146", desc: "4772696666696E20416C6578616E646572204B69657365636B65722077726F7465207468697320636F646521"}
        chai
            .request(server)
            .post("/add_drink")
            .send(drink_test)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
        });
});