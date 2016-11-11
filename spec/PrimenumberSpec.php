<?php

namespace spec;

use Primenumber;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class PrimenumberSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(Primenumber::class);
    }

    function it_parses_something()
    {
        $this->parse()->shouldReturn([]);
    }
}
