import React, { useEffect } from "react";

import Title from "./title";
import { getComponent } from "../../componentsMap";

function Form(props) {
  const {
    addClass,
    onSubmit,
    title,
    addClassTitle,
    formChildren = null,
  } = props;
  const fieldsRefs = [];

  useEffect(() => {
    fieldsRefs[0].focus();
  }, []);

  return (
    <form className={`d-flex flex-column ${addClass}`} onSubmit={onSubmit}>
      {title && <Title title={title} addClass={addClassTitle} />}
      {formChildren &&
        formChildren.map((field, i) => {
          field["forwardRef"] = (ref) => (fieldsRefs[i] = ref);
          return <React.Fragment key={i}>{getComponent(field)}</React.Fragment>;
        })}

      {props.children && props.children}
    </form>
  );
}

export default Form;
