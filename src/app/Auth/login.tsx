import { Form, Checkbox } from "antd";
import AuthButton from "../../component/partial/AuthButton";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from '../../hooks'
// import { withAuthGuard } from "../../component/higherOrder/withAuth";
import AuthLayout from "../../component/shared/AuthLayout";
import BaseInput from "../../component/shared/BaseInput";
// import { RouteTypes } from '../../types'
import { loginFields } from "../../config/index";
function Login() {
  // const {login, loading} = useAuth();
  const navigate = useNavigate();
  return (
    <AuthLayout heading={"Welcome Back"} subheading={"Login to continue"}>
      <div>
        <Form
          layout="vertical"
          onFinish={(values: any) => {
            // login(values);
            console.log(values);
          }}
        >
          {loginFields.map((item: any) => {
            return (
              <Form.Item
                label={item.title}
                key={item.name}
                name={item.name}
                rules={item.rules}
              >
                <BaseInput {...item} />
              </Form.Item>
            );
          })}
          <div className="flex justify-between items-center">
            <Checkbox className="text-[#5F697D] text-[11px] roboto-regular">
              Remember me
            </Checkbox>
            <Link
              to={"/forgot-password"}
              className="text-[#1173FF] text-[11px] roboto-regular"
            >
              Forgot Password ?
            </Link>
          </div>
          <AuthButton
            htmlType="submit"
            text={"Login"}
            onClick={() => navigate("/dashboard")}
          />
        </Form>
      </div>
    </AuthLayout>
  );
}

export default Login;
