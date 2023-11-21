import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'

const PracticeTwo: FC = () => {
  const animals = [
    {
      name: 'León',
      description:
        'Majestuoso y feroz, el león es el rey de la selva. Su melena dorada irradia poder y nobleza en la vastedad de la sabana africana.'
    },
    {
      name: 'Águila Calva',
      description:
        'Símbolo de libertad, el águila calva, con su plumaje blanco y cabeza erguida, planea sobre paisajes imponentes, representando la grandeza de América.'
    },
    {
      name: 'Delfín',
      description:
        'Juguetones y ágiles, los delfines surcan los océanos con gracia. Su inteligencia y curiosidad los convierten en embajadores encantadores del mundo marino. Los delfines son conocidos por su fuerte sentido de la comunidad. Suelen vivir en grupos sociales llamados "manadas" o "pods", y se comunican entre sí a través de una variedad de sonidos, incluidos clics y silbidos.'
    },
    {
      name: 'Oso Polar',
      description:
        'En el vasto y helado paisaje del Ártico, el oso polar reina supremo. Su pelaje blanco camufla su imponente presencia mientras caza sobre la banquisa.'
    },
    {
      name: 'Mariposa Monarca',
      description:
        'Delicada y migratoria, la mariposa monarca pinta los cielos con alas naranjas y negras. Su viaje anual es un prodigio de resistencia y transformación. La mariposa monarca es conocida por su migración anual que abarca miles de kilómetros. Cada año, millones de mariposas monarcas viajan desde América del Norte hasta los bosques de oyamel en México, donde pasan el invierno. Las alas de la mariposa monarca son inconfundibles, con un patrón de color naranja y negro. Este diseño vibrante no solo es hermoso, sino que también sirve como una advertencia para los depredadores, ya que las mariposas monarcas son venenosas.'
    },
    {
      name: 'Elefante Africano',
      description:
        'Gigante y sabio, el elefante africano recorre las llanuras con sus colmillos imponentes. Su inteligencia y vínculos sociales los hacen seres asombrosos.'
    },
    {
      name: 'Canguro Rojo',
      description:
        'Ágil y saltarín, el canguro rojo es el símbolo de la fauna australiana. Sus saltos extraordinarios lo llevan a través de la aridez del Outback.'
    },
    {
      name: 'Pingüino Emperador',
      description:
        'Monarcas del hielo antártico, los pingüinos emperador desafían el frío extremo. Su dedicación a la crianza en medio del invierno es un ejemplo de valentía.'
    },
    {
      name: 'Tigre Bengalí',
      description:
        'En las selvas de la India, el tigre bengalí acecha con elegancia. Sus rayas doradas y negras camuflan su presencia en la densa vegetación.'
    },
    {
      name: 'Cebra',
      description:
        'Rayada en blanco y negro, la cebra trae patrones a las vastas llanuras africanas. Su gracia y velocidad la convierten en un icono de la naturaleza salvaje.'
    },
    {
      name: 'Colibrí',
      description:
        'Minúsculo y colorido, el colibrí es un bailarín del aire. Sus vibrantes plumas y vuelo acrobático lo convierten en una joya en movimiento.'
    },
    {
      name: 'Orangután',
      description:
        'En las selvas de Borneo y Sumatra, el orangután se balancea entre las ramas con destreza. Su inteligencia y expresiones humanas lo hacen cautivador. Los orangutanes son nativos de las selvas de Borneo y Sumatra en el sudeste asiático. Son los únicos grandes simios que se encuentran en Asia y comparten el 97% de su ADN con los humanos.'
    }
  ]

  return (
    <>
      <Typography variant="h6" sx={{ my: 2 }}>
        Producto
      </Typography>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        {animals.map((element, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>
                  {element.name}
                </Typography>
                <Typography>{element.description}</Typography>
              </CardContent>
              <CardActions
                sx={{ marginTop: 'auto', minHeight: '42px', background: 'red' }}
              ></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default PracticeTwo
