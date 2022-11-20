export const makeDescriptionMarkup = (text: string) => {
  return text
    .split("\n")
    .filter((el) => el.trim() !== "")
    .map((el) => {
      if (el.trim() === "Responsopilities:" || el.trim() === "Requirements:") {
        return <h3 className="mt-[50px] mb-5 font-bold">{el}</h3>;
      } else if (el.includes("\t")) {
        return (
          <ul className="list-[square] list-inside m:list-outside">
            {el
              .split(". ")
              .filter((el) => el.trim() !== "")
              .map((el, ind) => (
                <li key={ind}>{el}</li>
              ))}
          </ul>
        );
      }
      return <p>{el}</p>;
    });
};
