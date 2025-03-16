'use client';

export function Hello() {
    console.log("Client component");

    function testFoo() {
        console.log("test foo");
    }
  return (
      <>
        <h2>Client component</h2>
        <button onClick={testFoo} className="
            bg-blue-500
            hover:bg-blue-700
            active:scale-95
            active:bg-blue-800
            text-white
            font-bold
            py-2
            px-4
            rounded
        "
        >
            test foo
        </button>
      </>
  );
}