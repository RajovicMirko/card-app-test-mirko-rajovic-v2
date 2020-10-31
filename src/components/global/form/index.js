import React, { useEffect } from "react";

import Title from "./title";
import { getComponent } from "../../componentsMap";

function Form(props) {
  const { addClass, onSubmit, title, addClassTitle, children } = props;
  let fieldsRefs = [];

  useEffect(() => {
    fieldsRefs[0].focus();
    return () => (fieldsRefs = []);
  }, []);

  return (
    <form className={`d-flex flex-column ${addClass}`} onSubmit={onSubmit}>
      {title && <Title title={title} addClass={addClassTitle} />}
      {getComponent &&
        children.map((field, i) => {
          field["forwardRef"] = (ref) => (fieldsRefs[i] = ref);
          return <React.Fragment key={i}>{getComponent(field)}</React.Fragment>;
        })}
      {!getComponent && children}
    </form>
  );
}

export default Form;
