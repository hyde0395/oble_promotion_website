import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Survey() {
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="5">
          <form className="bg-white mt-3" action="">
            <p className="fw-bold">
              광고주님! 반갑습니다! 어떤 사업을 하고 계시나요?
            </p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label="개인사업자"
              defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label="프렌차이즈 가맹점"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault3"
              label="프렌차이즈 본사"
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault4"
              label="유통 판매업"
            />
          </form>
          <div className="text-end">
            <MDBBtn>이전</MDBBtn>

            <MDBBtn>다음</MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
