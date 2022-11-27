import { WishPipe } from './wish.pipe';

describe('WishPipe', () => {
  let wishpipe;
  beforeEach(() => {
    wishpipe = new WishPipe();
  });

  it('Should return hello name', () => {

    // Act
    const wishstring = wishpipe.transform('Rama');
    // expect
    expect(wishstring).toEqual('Hello Rama');
  });

  it('Should return hello name 2', () => {

    //act
    const wishstring = wishpipe.transform('Ravana');
    // expect
    expect(wishstring).toEqual('Hello Ravana');
  });

});

