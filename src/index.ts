import { DynamoDB } from "aws-sdk";
export const handler = async (event: any) => {
  let scanItem = await new DynamoDB()
    .scan({ TableName: "SampleTable", Select: "ALL_ATTRIBUTES" })
    .promise();
  if (scanItem.Count === 1) {
    return "1";
  } else if (scanItem.Count === 2) {
    return "2";
  }
  return "etc";
};
