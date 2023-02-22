import { Component, OnInit } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';
import { PromotionService } from '../service/promotion.service';
import { LeadersService } from '../service/leaders.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  'dish': Dish;
  'promotion': Promotion;
  'leader': Leader;
  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeadersService
  ) {}
  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe((dish) => (this.dish = dish));
    this.promotionservice
      .getFeaturedPromotion()
      .subscribe((promo) => (this.promotion = promo));
    this.leaderService
      .getFeaturedLeader()
      .subscribe((leader) => (this.leader = leader));
  }
}
