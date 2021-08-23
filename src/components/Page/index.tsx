import React from 'react'

import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'

import { Container } from './styles'

const Page: React.FC = () => {
  return (
    <Container>

      <UniqueOverlay />

      <ModelsWrapper>
        <div>
          {[
            'Model 3',
            'Model S',
            'Model X',
            'Model Y',
            'Solar e Powerwall',
            'Acessorios',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  )
}

export default Page