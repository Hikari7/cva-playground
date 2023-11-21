import { Button } from './component/Button';

export default function Home() {
  return (
    <main className='min-h-screen gap-6 bg-[#18181A] p-24'>
      <div className='flex flex-col items-center gap-10'>
        <div className='flex items-end gap-3'>
          <Button size='xs'>Button</Button>
          <Button size='sm'>Button</Button>
          <Button>Button</Button>
          <Button size='lg'>Button</Button>
          <Button size='xl'>Button</Button>
        </div>

        <div className='flex items-end gap-3'>
          <Button size='xs' intent='secondary'>
            Button
          </Button>
          <Button size='sm' intent='secondary'>
            Button
          </Button>
          <Button intent='secondary'>Button</Button>
          <Button size='lg' intent='secondary'>
            Button
          </Button>
          <Button size='xl' intent='secondary'>
            Button
          </Button>
        </div>
        <div className='flex items-end gap-3'>
          <Button size='xs' intent='outline'>
            Button
          </Button>
          <Button size='sm' intent='outline'>
            Button
          </Button>
          <Button intent='outline'>Button</Button>
          <Button size='lg' intent='outline'>
            Button
          </Button>
          <Button size='xl' intent='outline'>
            Button
          </Button>
        </div>
        <div className='flex items-end gap-3'>
          <Button size='xs' intent='rounded'>
            Button
          </Button>
          <Button size='sm' intent='rounded'>
            Button
          </Button>
          <Button intent='rounded'>Button</Button>
          <Button size='lg' intent='rounded'>
            Button
          </Button>
          <Button size='xl' intent='rounded'>
            Button
          </Button>
        </div>
        <div className='flex items-end gap-3'>
          <Button size='xs' intent='link'>
            Button
          </Button>
          <Button size='sm' intent='link'>
            Button
          </Button>
          <Button intent='link'>Button</Button>
          <Button size='lg' intent='link'>
            Button
          </Button>
          <Button size='xl' intent='link'>
            Button
          </Button>
        </div>

        <div className='mx-auto flex flex-col items-center justify-center gap-2'>
          <p className='text-white'>It&apos;s customizable!</p>
          <Button size='sm' className='bg-[#bada55] hover:bg-[#f3ffbd]'>
            Button
          </Button>
        </div>
      </div>
    </main>
  );
}
