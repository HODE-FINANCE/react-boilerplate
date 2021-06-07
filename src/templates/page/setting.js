import styled from 'styled-components'
//
import { colors } from 'templates'
//
const PageSettingTemplate = {
  PageWrapper: styled.div`
    padding-top: 80px;
  `,
  FeatureWrapper: styled.div`
    width: 100%;
    max-width: 800px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;

    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px;
    -webkit-box-align: center;
    border-radius: 5px;
    transition: all 300ms;
    will-change: transform;
    position: relative;
    padding: 15px;
    &:hover {
      background-color: rgba(255, 255, 255, 1);
      box-shadow: rgb(0 0 0 / 10%) 0px 10px 20px;
    }

    .feature-title {
      display: flex;
      align-items: center;
      font-size: 25px;
      font-weight: bold;

      b {
        ${colors.mainTextColor}
      }

      .current-badge {
        height: 22px;
        padding: 2px 10px;
        background: #c4c4c4;
        font-size: 12px;
        font-weight: lighter;
        border-radius: 20px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }

    .subscription {
      text-align: right;
    }

    .change-plan {
      text-align: right;
    }
  `,

  ContentWrapper: styled.div`
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;

    .bread-crumb {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .box-title {
      font-size: 20px;
      font-weight: bold;
      margin-top: 25px;
      margin-bottom: 25px;

      .box-detail {
        font-size: 13px;
        font-weight: lighter;
        color: #999;
      }
      .box-slot-wrapper {
        font-size: 15px;
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .buy-slot-button {
          font-size: 12px;
          cursor: pointer;
          text-decoration: underline;
          color: #333;
          &:hover {
            color: #000;
          }
        }

        .add-pool-button {
          font-size: 12px;
          margin-left: 10px;
          cursor: pointer;
          text-decoration: underline;
          color: #333;
          &:hover {
            color: #000;
          }
        }

        .box-slot-detail {
          border-right: 1px solid #ccc;
          padding-right: 10px;
          margin-right: 10px;
        }
        .box-slot {
          color: rgba(0, 0, 0, 1);
          border: 2px solid rgba(0, 0, 0, 1);
          padding-left: 15px;
          padding-right: 15px;
          border-radius: 5px;
        }
      }
    }
  `,

  PoolWrapper: styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px;
    -webkit-box-align: center;
    border-radius: 5px;
    transition: all 300ms;
    will-change: transform;
    position: relative;
    padding: 15px;
    &:hover {
      background-color: rgba(255, 255, 255, 1);
      box-shadow: rgb(0 0 0 / 10%) 0px 10px 20px;
    }

    .il-plus {
      color: #21916d;
    }

    .il-minus {
      color: #ce0000;
    }

    .feature-title {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: bold;

      .current-badge {
        height: 22px;
        padding: 2px 10px;
        background: #c4c4c4;
        font-size: 12px;
        font-weight: lighter;
        border-radius: 20px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }

    .subscription {
      text-align: right;
    }

    .change-plan {
      text-align: right;
    }

    button {
      border: none;
      border-radius: 50px;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      cursor: pointer;
      font-size: 13px;
      transition: all ease 300ms;
      margin-left: 5px;
      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }
    }

    .set-button {
      position: absolute;
      bottom: 5px;
      right: 10px;
      width: 35px;
      height: 35px;
    }

    .deposit-list {
      display: flex;
      width: 100%;
      height: 80px;
      align-items: center;
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.05);
      &:hover {
        background: rgba(0, 0, 0, 0.08);
      }
    }
    .lp-title-analyze {
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      border-bottom: 4px solid #f1f1f1;
      border-top: 4px solid #f1f1f1;
      b {
        font-size: 30px;
        color: #ce0000;
      }
    }

    .il-summary-box {
      position: relative;
    }

    .lp-summary-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 18px;
      border-top: 4px solid #f1f1f1;
      margin-top: 20px;
    }
    .lp-title-label {
      font-size: 14px;
      font-weight: bold;
      margin-top: 10px;
    }

    .pool-detail {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .pool-name {
      font-size: 20px;
      font-weight: bold;
    }

    .pool-button {
      padding: 10px 30px;
      background: rgba(0, 0, 0, 1);
      border-radius: 50px;
      cursor: pointer;
      color: #fff;
      display: flex;
      align-self: center;
      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }
    }

    .pool-button-stop {
      display: flex;
      align-self: center;
      padding: 10px 30px;
      border-radius: 50px;
      cursor: pointer;
      color: #c41313;
      border: 2px solid #c41313;

      &:hover {
        background: #f9e0e0;
      }
    }

    table {
      width: 100%;

      th {
        text-align: left;
      }
    }
  `,

  CointSourceWrapper: styled.div`
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
  `,

  CoinWrapper: styled.div`
    width: 100%;
    padding-top: 40px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px;
    -webkit-box-align: center;
    border-radius: 5px;
    transition: all 300ms;
    will-change: transform;
    position: relative;
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 50px !important;
    &:hover {
      background-color: rgba(255, 255, 255, 1);
      box-shadow: rgb(0 0 0 / 10%) 0px 10px 20px;
    }

    .follow-button {
      cursor: pointer;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 5px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);
      &:hover {
        background: rgba(0, 0, 0, 1);
      }
    }
    .unfollow-button {
      cursor: pointer;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 5px 5px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.8);
      background: rgba(0, 0, 0, 0.2);
      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }

    a {
      font-size: 10px;
      color: #4a6c5f;
      margin-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
      word-wrap: break-word;
    }
  `,

  PoolTokenWrapper: styled.div`
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
  `,

  TokenSourceWrapper: styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 5px solid #fff;
    overflow: hidden;
    background: #fff;
    &:first-child {
      margin-right: -10px;
    }
  `,
}

export default PageSettingTemplate
