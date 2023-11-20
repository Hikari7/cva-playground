import { Button } from './component/Button';

export default function Home() {
  return (
    <main className='p-24 gap-6 bg-[#18181A] min-h-screen'>
      <div className='gap-10 flex flex-col items-center'>
        <div className='flex items-end gap-3 text-[#3E3E3E]'>
          <Button size='xs'>Button</Button>
          <Button size='sm'>Button</Button>
          <Button>Button</Button>
          <Button size='lg'>Button</Button>
          <Button size='xl'>Button</Button>
        </div>

        <div className='flex items-end gap-3'>
          <Button size='xs' variant='secondary'>
            Button
          </Button>
          <Button size='sm' variant='secondary'>
            Button
          </Button>
          <Button variant='secondary'>Button</Button>
          <Button size='lg' variant='secondary'>
            Button
          </Button>
          <Button size='xl' variant='secondary'>
            Button
          </Button>
        </div>
        <div className='flex items-end gap-3'>
          <Button size='xs' variant='outline'>
            Button
          </Button>
          <Button size='sm' variant='outline'>
            Button
          </Button>
          <Button variant='outline'>Button</Button>
          <Button size='lg' variant='outline'>
            Button
          </Button>
          <Button size='xl' variant='outline'>
            Button
          </Button>
        </div>
        <div className='flex items-end gap-3'>
          <Button size='xs' variant='rounded'>
            Button
          </Button>
          <Button size='sm' variant='rounded'>
            Button
          </Button>
          <Button variant='rounded'>Button</Button>
          <Button size='lg' variant='rounded'>
            Button
          </Button>
          <Button size='xl' variant='rounded'>
            Button
          </Button>
        </div>
        <div className='flex items-end gap-3'>
          <Button size='xs' variant='link'>
            Button
          </Button>
          <Button size='sm' variant='link'>
            Button
          </Button>
          <Button variant='link'>Button</Button>
          <Button size='lg' variant='link'>
            Button
          </Button>
          <Button size='xl' variant='link'>
            Button
          </Button>
        </div>
      </div>
    </main>
  );
}
