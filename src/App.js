import './App.css';
import Table from './components/Table';

function App() {
  const dataSource = () => {
    return Array.from({ length: 5 }).map((_, i) => ({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      },
      id: 10030660 + i,
      time: 2000 + i,
    }));
  };
  const render = (value, index, record) => {
    return <a href='javascript:;'>Remove({record.id})</a>;
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <Table dataSource={dataSource()}>
          <Table.Column title='Id' dataIndex='id' align='center' />
          <Table.Column title='Title' width='150px' dataIndex='title.name' />
          <Table.Column title='Time' dataIndex='time' />
          <Table.Column cell={render} />
        </Table>
      </header>
    </div>
  );
}

export default App;
