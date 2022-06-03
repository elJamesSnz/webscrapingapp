import React, { useState, useEffect } from "react";
import { map } from "lodash";
import { Container, Menu, Grid } from "semantic-ui-react";
import { getCategoriesApi } from "../../../api/category";
export default function MenuWeb() {
  //recuperar las páginas de las secciones que tiene la pagina
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getCategoriesApi();
      setCategories(response || []);
    })();
  }, []);

  if (!categories) {
    return null;
  }

  return (
    <div className="">
      <Container>
        <Grid className="menu" columns={1}>
          <Grid.Column className="menu__center">
            <MenuOpciones categories={categories} />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function MenuOpciones(props) {
  const { categories } = props;

  return (
    <Menu>
      {map(categories, (c) => (
        <Menu.Item as="a" key={c.id} name={c.id}>
          {c.name}
        </Menu.Item>
      ))}
    </Menu>
  );
}
