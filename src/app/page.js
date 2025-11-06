import Board from './components/Board';
export default function Homepage(){
  return (
    <main className='mx-auto-w-6xl-p-6'>
      <h1 className='text-3xl dont-bold mb-4'>Helpdest Ticket Board</h1>
      <Board />
    </main>
  );
}