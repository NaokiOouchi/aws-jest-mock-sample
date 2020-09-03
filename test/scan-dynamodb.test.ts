import { DynamoDB } from "aws-sdk";
import { mocked } from "ts-jest/utils";

import { handler } from "../src/index";

jest.mock("aws-sdk");

describe("scan test", () => {
  it("Count => 1 : return 1", async () => {
    // AWS モック
    let data = {
      Items: [{ value: "Value1", SampleKey: "key1" }],
      Count: 1,
      ScannedCount: 1,
    };
    mocked(DynamoDB).mockImplementationOnce((): any => {
      return {
        scan: (_param: any, callback: any) => {
          return {
            promise: () => {
              return data;
            },
          };
        },
      };
    });

    const result = await handler({});
    expect(result).toEqual("1");
  });
  it("Count => 2 : return 2", async () => {
    // AWS モック
    let data = {
      Items: [
        { value: "Value1", SampleKey: "key1" },
        { value: "Value2", SampleKey: "key2" },
      ],
      Count: 2,
      ScannedCount: 2,
    };
    mocked(DynamoDB).mockImplementationOnce((): any => {
      return {
        scan: (_param: any, callback: any) => {
          return {
            promise: () => {
              return data;
            },
          };
        },
      };
    });

    const result = await handler({});
    expect(result).toEqual("2");
  });
  it("Count => 3 : return etc", async () => {
    // AWS モック
    let data = {
      Items: [
        { value: "Value1", SampleKey: "key1" },
        { value: "Value2", SampleKey: "key2" },
        { value: "Value3", SampleKey: "key3" },
      ],
      Count: 3,
      ScannedCount: 3,
    };
    mocked(DynamoDB).mockImplementationOnce((): any => {
      return {
        scan: (_param: any, callback: any) => {
          return {
            promise: () => {
              return data;
            },
          };
        },
      };
    });

    const result = await handler({});
    expect(result).toEqual("etc");
  });
});
