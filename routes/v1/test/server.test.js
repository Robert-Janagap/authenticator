require("module-alias/register");
const chai = require("chai");
const request = require("supertest");
const http = require("chai-http");
const server = require("@root/server");
const config = require("config");

const expect = chai.expect;

describe("Server", () => {
  before((done) => {
    console.log("---Server test started---");
    done();
  });

  it("Should running", () => {
    expect(server).to.be.a("function");
  });

  it("Should have running port", () => {
    expect(server.port).to.be.equal(config.get("port"));
  });

  after((done) => {
    console.log("---Server test completed---");
    done();
  });
});
