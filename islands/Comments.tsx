type Props = {
  threadUUID: string;
};
export default function Comments({ threadUUID }: Props) {
  console.log({ threadUUID });
  return <div>threadUUID: {threadUUID}</div>;
}
