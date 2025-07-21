import { Avatar, Space, Table } from "antd";
import IsError from "../../components/IsError";
import IsLoading from "../../components/IsLoading";
import { useAdministrators } from "../../services/administratorsService";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Administrators() {
  const { administrators, isLoading, isError, error, refetch } =
    useAdministrators();


  const columns = [
    {
      title: <span className="text-[20px]">Sl no.</span>,
      dataIndex: "serial_number",
      key: "serial_number",
      render: (serial_number) => (
        <span className=" text-[16px]">#{serial_number}</span>
      ),
    },
    {
      title: <span className="text-[20px]">User</span>,
      dataIndex: "full_name",
      key: "full_name",
      render: (text, record) => (
        <Space size="middle">
          <Avatar className="w-[40px] h-[40px]" src={record.profile} />
          <span className=" text-[16px]">{text}</span>
        </Space>
      ),
    },
    {
      title: <span className="text-[20px]">Email</span>,
      dataIndex: "email",
      key: "email",
      render: (email) => <span className=" text-[16px]">{email}</span>,
    },
    {
      title: <span className="text-[20px]">Phone</span>,
      dataIndex: "phone",
      key: "phone",
      render: (phone) => <span className=" text-[16px]">{phone}</span>,
    },
    // {
    //   title: <span className="text-[20px]">Answers</span>,
    //   dataIndex: "question_answer",
    //   key: "question_answer",
    //   render: (question_answer) => (
    //     <ViewAnswerModal question_answer={question_answer} />
    //   ),
    // },
    // {
    //   title: <span className="text-[20px]">Status</span>,
    //   key: "status",
    //   render: () => (
    //     <Tag
    //       className="w-full mr-5 text-center text-[20px] py-3"
    //       color="#359700"
    //     >
    //       Active
    //     </Tag>
    //   ),
    // },
    {
      title: <span className="text-[20px]">Has Access To</span>,
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <span className=" text-[16px]">{role}</span>
      ),
    },
    {
      title: <span className="text-[20px]">Action</span>,
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            // onClick={() => handleUserDetails(record)}
            className="text-[23px] bg-[#006699] p-1 rounded-sm text-white hover:text-blue-300 cursor-pointer"
          />
          <DeleteOutlined
            className="text-[23px] bg-[#E30000] p-1 rounded-sm text-white hover:text-red-300 cursor-pointer"
            // onClick={() => showBlockConfirm(record.id)}
          />
        </Space>
      ),
    },
  ];

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError error={error} refetch={refetch} />;
  }

  return (
    <div className="p-4">
      <Table
        columns={columns}
        dataSource={administrators}
        rowKey="id"
        loading={isLoading}
        pagination={false}
      />
    </div>
  );
}

export default Administrators;
