import { useContext, useState, useEffect } from 'react'
import { Row, Col, Button, Modal } from 'antd'
import styled from 'styled-components'
import map from 'lodash/map'
import size from 'lodash/size'
import isEmpty from 'lodash/isEmpty'
//
import { coinStores, poolStores } from 'app-firebase/firestore'
import { coinFunctions, poolFunctions } from 'app-firebase/functions'
//
import { AppContext } from 'context'
//
function AddPool({ isVisible, onClose }) {
  const { wallet } = useContext(AppContext)
  const [farmList, setFarmList] = useState([])
  const [selectFarm, setSelectFarm] = useState(null)

  const handleGetFarmList = async () => {
    const farms = await poolStores.farmList()
    setFarmList(farms)
  }

  const handleSelectFarm = (farmKey) => {
    setSelectFarm(farmKey)
  }

  useEffect(() => {
    handleGetFarmList()

    return () => {
      setSelectFarm(null)
      setFarmList([])
    }
  }, [isVisible])

  return (
    <Modal
      visible={isVisible}
      title="Add pool"
      onCancel={onClose}
      footer={[
        <Button key="back" shape="round" onClick={onClose}>
          Cancle
        </Button>,
        <Button key="confirm" type="primary" shape="round" onClick={onClose}>
          Confirm
        </Button>,
      ]}
    >
      <div>
        <div>
          Select farm for add and management pool{' '}
          <b>(Support {size(farmList)} Farms)</b>
        </div>
        <FarmWrapper>
          <Row gutter={12}>
            {map(farmList, (farm, key) => (
              <Col key={`farm-key-${key}`} xs={{ span: 12 }} lg={{ span: 8 }}>
                <FarmListWrapper
                  onClick={() => handleSelectFarm(farm.ape)}
                  selectFarm={selectFarm === farm.ape ? 'selected' : null}
                >
                  <div className="farm-logo">
                    <img src={farm.logo} />
                  </div>
                  <div className="farm-name">{farm.name}</div>
                </FarmListWrapper>
              </Col>
            ))}
            <Col />
          </Row>
        </FarmWrapper>
      </div>
    </Modal>
  )
}

export default AddPool

const FarmWrapper = styled.div`
  max-height: 360px;
  overflow: auto;
  padding: 10px;
`

const FarmListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  text-align: center;
  border: 1px solid #f1f1f1;
  padding: 5px;
  border-radius: 15px;
  margin-bottom: 20px;
  transition: all ease 300ms;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }

  ${({ selectFarm }) =>
    selectFarm === 'selected' &&
    `
    background: #c8e0f4;
  `}
  .farm-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100px;
      max-height: 40px;
    }
  }

  .farm-name {
    margin-top: 10px;
    font-weight: bold;
  }
`
