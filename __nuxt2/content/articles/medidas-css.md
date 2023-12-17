---
title: Medidas CSS
description: Explicación sobre los distintos tipos de unidades de medida que hay para CSS
alt: Medidas CSS
read: 6
createdAt: 04-06-2023
---


# Introducción

CSS o Cascading Style Sheets (**Hojas de Estilo en Cascada en español**) es un lenguaje utilizado para definir la presentación de documentos HTML y XML. En este artículo, nos centraremos en las unidades de medida más comunes en CSS y cómo se pueden utilizar para diseñar páginas web.

## Píxeles (px)

Los pixeles son las unidades de medida más utilizada en CSS. Un píxel es una unidad de medida relativa a la resolución de la pantalla. En otras palabras, un píxel se define como un punto en la pantalla que puede cambiar de tamaño según la densidad de píxeles de la pantalla. Por lo tanto, el tamaño de un píxel puede variar dependiendo del dispositivo.

Los píxeles son ampliamente utilizados en CSS porque permiten un control preciso del tamaño y la posición de los elementos en una página web. Por ejemplo, si se quiere definir el tamaño de una imagen en CSS, se puede utilizar la propiedad "width" y definir el valor en píxeles:

```css
img {
  width: 300px;
}
```

Sin embargo, el uso de píxeles  puede tener desventajas en la accesibilidad y usabilidad de un sitio web. Los píxeles no son escalables y pueden dificultar la lectura y la visualización del sitio web en dispositivos con pantallas más pequeñas o de mayor resolución. Por lo que habría que tener en cuenta otras alternativas de medida de CSS para crear diseños responsives y accesibles.

## Porcentaje (%)

El porcentaje es otra unidad de medida muy útil en CSS. El porcentaje se define como una relación entre dos valores. Por ejemplo, si se quiere definir el ancho de un elemento en relación con el ancho de su contenedor, se puede utilizar la propiedad "width" y definir el valor en porcentaje.

```css
div {
  width: 50%;
}

```

El porcentaje es una unidad de medida relativa, lo que significa que su valor depende del valor de otra propiedad. Por lo tanto, si se cambia el valor de la propiedad relacionada, el valor del porcentaje también cambiará.

El uso de porcentajes es una buena práctica para crear diseños responsives, ya que permite que los elementos se adapten al tamaño de la pantalla de manera proporcional. Sin embargo, el uso excesivo de porcentajes puede hacer que los diseños sean difíciles de controlar y mantener a futuro. Por lo tanto, es importante utilizar los porcentajes de manera estratégica y en combinación con otras unidades de medida en CSS.
El uso de porcentajes nos facilita mucho a la hora de crear diseños responsives, ya que permite que los elementos se adapten  de manera proporcional  a la pantalla. El uso excesivo de porcentajes como unidad de medida en CSS puede generar dificultades en el mantenimiento de los diseños, al hacerlos difíciles de controlar y pudiendo provocar resultados inesperados. Esta limitación en el control y la previsibilidad puede comprometer la calidad del diseño y afectar la experiencia del usuario. Por lo que es importante de  usarlos de manera estratégica  con otras unidades de medidas de CSS.

## Unidades de medida relativas (em y rem)

Las unidades de medida relativas son aquellas que dependen del tamaño del elemento padre. La unidad **em** se define como el tamaño de fuente del elemento padre, mientras que la unidad **rem** se define como el tamaño de fuente de la raíz del documento HTML.

Las unidades de medida relativas son muy útiles para crear diseños responsives, ya que permiten definir el tamaño de los elementos en relación con el tamaño de la pantalla. Por ejemplo, si se quiere definir el tamaño de fuente de un elemento en CSS, se puede utilizar la propiedad "font-size" y definir el valor en "em".

```css
p {
  font-size: 1.2em;
}

```

El uso de unidades de medida relativas se ha convertido en una práctica recomendada para diseñar sitios web responsives y accesibles. Las unidades de medida relativas permiten que los elementos del diseño se ajusten proporcionalmente al tamaño de la pantalla, lo que los hace escalables y, por lo tanto, más accesibles y utilizables para los usuarios. Al utilizar este enfoque, se logra una mejor adaptación a diferentes dispositivos y resoluciones de pantalla, lo que resulta en una experiencia de usuario más coherente y satisfactoria.

## Otras unidades de medida en CSS

Aparte de las unidades que hemos visto anteriormente, CSS nos ofrece otras medidas que pueden sernos útiles: 

- Unidades de medida absolutas, como pulgadas (in), centímetros (cm) y milímetros (mm). Estas unidades de medida son útiles para diseños impresos o para definir el tamaño de elementos que deben tener un tamaño fijo.
- Unidades de medida de la vista, como viewport width (vw) y viewport height (vh). Estas unidades de medida se refieren al tamaño de la ventana gráfica del navegador y son útiles para crear diseños responsives que se adapten al tamaño de la pantalla.

## Conclusión

CSS ofrece una amplia variedad de unidades de medida que permiten diseñar páginas web precisas y responsives. En este artículo, hemos visto algunas de las unidades de medida más comunes en CSS, como píxeles, porcentajes, em y rem, y cómo se pueden utilizar para crear diseños accesibles y responsives. Cada unidad de medida tiene sus propias ventajas y desventajas, y es importante comprender cómo utilizarlas para adaptarse a las necesidades de diseño de cada proyecto. 

Espero que te haya gustado este articulo, si  quieres estar atento a más novedades sobre el desarrollo web no dudes en seguirme en mis redes sociales.