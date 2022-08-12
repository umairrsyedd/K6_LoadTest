import http from "k6/http";

export const options = {
  scenarios: {
    _200_Rps: {
      executor: "constant-arrival-rate",
      rate: 200,
      timeUnit: "1s", // 200 iterations per second, i.e. 200 RPS
      duration: "10m", // 10 minutes
      preAllocatedVUs: 1000, // how large the initial pool of VUs would be
      maxVUs: 2000, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },
};

export default function () {
  const url = "https://go-adbutler-stage.trell.co/api/v1/adButler";
  const payload = JSON.stringify({
    ID: 181425,
    apiVersion: "2.0.7",
    campaignAdLimit: 4,
    clickmode: "callback",
    gender: "2",
    ip: "117.228.175.26",
    limit: 2,
    optOut: false,
    setID: 558901,
    size: "0x0",
    type: "jsonr",
    ua: "okhttp%2F4.9.3",
    _abdk_json: {
      age: "3",
      aq: "1",
      av: 6161,
      ct: -1,
      dm: "Samsung SM-M315F",
      dt: "samsung",
      ft: 0,
      g: "2",
      gid: "7c250f69-f3a6-4293-a099-0a1fc64658db",
      ip: "117.228.175.26",
      lan: "38",
      nc: "BSNL Mobile",
      nt: "3G",
      os: "android",
      slot: -1,
      userID: "123123",
    },
    _eld: {
      age: "3",
      aq: "1",
      av: 6161,
      ct: -1,
      dm: "Samsung SM-M315F",
      dt: "samsung",
      ft: 0,
      g: "2",
      gid: "7c250f69-f3a6-4293-a099-0a1fc64658db",
      ip: "117.228.175.26",
      lan: "38",
      nc: "BSNL Mobile",
      nt: "3G",
      os: "android",
      slot: -1,
      userID: "123123",
    },
  });
  const params = {
    headers: {
      "Content-Type": "multipart/form-data",
      "trell-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxODA1NjAwIiwicm9sZXMiOlsibG9naW4iXSwiZXhwIjoxNjczNTE5MDUwLCJpYXQiOjE2NTc5NjcwNTAsImlzcyI6InRyZWxsLmluIn0.6Xg3ltPpM-hwaKz_I1J76HWg3RJVGDjFWACXQyGe4mg",
      "trell-app-version-int": "6147",
    },
  };

  http.post(url, payload, params);
}
