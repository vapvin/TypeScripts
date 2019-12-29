interface Props {
  [key: string]: string;
}

const c: Props = {
  s: "b",
  d: "d",
  c: "3",
  3: "ㄴ"
};

c[3];
